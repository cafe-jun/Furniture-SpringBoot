package com.cafejun.fuspring.auth;

import com.cafejun.fuspring.lib.JsonUtils;
import com.cafejun.fuspring.payload.request.auth.SignInRequest;
import com.cafejun.fuspring.payload.request.auth.SignUpRequest;
import com.cafejun.fuspring.repository.member.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Slf4j
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles(profiles = "local")
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;


    @BeforeEach
    public void init(){
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context)
                .addFilter(new CharacterEncodingFilter("UTF-8", true))
                .build();
    }

    @Test
    @DisplayName("로그인 테스트")
    void signin() throws Exception {
        //give
        SignInRequest signInRequest = new SignInRequest();
        signInRequest.setEmail("string@aa.bb");
        signInRequest.setPassword("string");

        //when
        ResultActions actions = this.mockMvc.perform(
                        post("/auth/signin")
                                .content(
                                        JsonUtils.asJsonToString(signInRequest)
                                )
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk())
                .andDo(print());

        //then
        JSONObject jsonObject = JsonUtils.asStringToJson(actions.andReturn().getResponse().getContentAsString());
        log.info("jsonObject={}",jsonObject);
    }
    @Test
    @DisplayName("회원가입 테스트")
    void signup() throws Exception {
        SignUpRequest signUpRequest = new SignUpRequest();
        signUpRequest.setEmail("tb25271@gmail.com");
        signUpRequest.setPassword("12345");
        signUpRequest.setName("jsshin");

        ResultActions actions = this.mockMvc.perform(
                post("/auth/signup")
                        .content(JsonUtils.asJsonToString(signUpRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andDo(print());
        //then
        JSONObject jsonObject = JsonUtils.asStringToJson(actions.andReturn().getResponse().getContentAsString());
        log.info("jsonObject={}",jsonObject);
    }

}
