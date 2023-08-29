import { Platform } from 'react-native';
import sensitiveInfo from 'react-native-sensitive-info';

interface SensitiveInfoOptions {
  // Define your sensitive info options here
}

interface SensitiveInfoItem {
  service: string;
  key: string;
  value: string;
}

type ExtractKeysFunction = (items: SensitiveInfoItem[]) => string[];

export default function createSensitiveInfoWrapper(
  options: SensitiveInfoOptions = {},
) {
  const extractKeys: ExtractKeysFunction = Platform.select({
    ios: (items: SensitiveInfoItem[]) => items[0].map((item) => item.key),
    android: Object.keys,
  });

  const noop = () => null;

  return {
    async getItem(
      key: string,
      callback: (error: any, result: string | null) => void = noop,
    ) {
      try {
        let result = await sensitiveInfo.getItem(key, options);

        if (typeof result === 'undefined') {
          result = null;
        }

        callback(null, result);

        return result;
      } catch (error) {
        callback(error);
        throw error;
      }
    },

    async setItem(
      key: string,
      value: string,
      callback: (error: any) => void = noop,
    ) {
      try {
        await sensitiveInfo.setItem(key, value, options);
        callback(null);
      } catch (error) {
        callback(error);
        throw error;
      }
    },

    async removeItem(key: string, callback: (error: any) => void = noop) {
      try {
        await sensitiveInfo.deleteItem(key, options);
        callback(null);
      } catch (error) {
        callback(error);
        throw error;
      }
    },

    async getAllKeys(callback: (error: any, keys: string[]) => void = noop) {
      try {
        const values = await sensitiveInfo.getAllItems(options);
        const result = extractKeys(values);

        callback(null, result);

        return result;
      } catch (error) {
        callback(error);
        throw error;
      }
    },
  };
}
