package com.yunzainfo.pitcher.plugin.project.controller.buildProject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * The interface Book detail mapper.
 *
 * @Description: 实际经费支出
 * @Auther: Mr.Bin
 * @create: 2018-05-30 14:56
 */
@Controller
@RequestMapping("/actualFunds")
public class ActualFundsController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ActualFundsController.class);

    /**
     * 进入主页
     * @param request the request
     * @param session the session
     * @param model   the model
     * @return jsp页面路径
     */
    @RequestMapping(method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpSession session,
                        Model model) {
        return "views/actualFunds/actualFunds";

    }
}
