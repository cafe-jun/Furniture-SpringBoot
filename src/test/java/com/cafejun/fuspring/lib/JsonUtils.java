package com.cafejun.fuspring.lib;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class JsonUtils {
    //dto를 object mapper로 통해 json 으로 저장
    public static String asJsonToString(Object object) {
        try {
            return new ObjectMapper().writeValueAsString(object);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    // implementation 'com.googlecode.json-simple:json-simple:1.1.1'

    //string 값을 json 형식으로 변경
    public static JSONObject asStringToJson(String string) throws ParseException {
        JSONParser jsonParser = new JSONParser();
        Object object = jsonParser.parse( string );
        JSONObject jsonObject = (JSONObject) object;
        return jsonObject;
    }
}
