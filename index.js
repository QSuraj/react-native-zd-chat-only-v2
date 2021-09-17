import { NativeModules } from "react-native";

const RNZendeskChatOnly = NativeModules.RNZendeskChatOnlyModule;

// react-native doesn't support method overloading for Java or Objective-C
// So this code implements the init method but makes sure to
// always call it with two defined parameters, passing null for the second as needed
// Reference: https://github.com/facebook/react-native/blob/07d090dbc6c46b8f3760dbd25dbe0540c18cb3f3/ReactAndroid/src/main/java/com/facebook/react/bridge/JavaModuleWrapper.java#L85-L86

RNZendeskChatOnly.init = (key, appId) => {
	return RNZendeskChatOnly._initWith2Args(key, appId || null);
};

/**
 * TypeScript Documentation for this Module describes the available methods & parameters
 *
 * @see { ./RNZendeskChat.d.ts }
 */
export default RNZendeskChatOnly;
