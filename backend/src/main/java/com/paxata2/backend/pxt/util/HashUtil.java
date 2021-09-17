package com.paxata2.backend.pxt.util;

import org.apache.tomcat.util.codec.binary.Base64;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.io.UnsupportedEncodingException;
import java.util.UUID;

public class HashUtil {

    public static String createUniqueId() {
        return UUID.randomUUID().toString().replaceAll("-", "");
    }

    public static String createHash(String value, String key) {
        try {
            byte[] bytes = hmacHash(key.getBytes("UTF-8"), value.getBytes("UTF-8"));
            return DatatypeConverter.printBase64Binary(bytes);
        } catch (Exception var3) {
            throw new RuntimeException("Failed to calculate hash for " + value + ", with key " + key, var3);
        }
    }

    public static String createAuthToken(String username, String hash) {
        String decodedToken = username + ":" + hash;

        try {
            return encodeBase64(decodedToken.getBytes("UTF-8"));
        } catch (UnsupportedEncodingException var4) {
            throw new RuntimeException(var4);
        }
    }

    public static byte[] hmacHash(byte[] binaryKey, byte[] binaryData) throws Exception {
        SecretKeySpec keySpec = new SecretKeySpec(binaryKey, "HmacSHA256");
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(keySpec);
        return mac.doFinal(binaryData);
    }

    public static String encodeBase64(byte[] binaryData) throws UnsupportedEncodingException {
        return new String(Base64.encodeBase64(binaryData), "UTF-8");
    }

    public static byte[] decodeBase64(String s) {
        return Base64.decodeBase64(s);
    }
}
