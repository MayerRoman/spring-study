package ru.mai.dep806.mvcapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Mayer Roman on 12.02.2016.
 */

@Controller
public class WelcomeController {

    @RequestMapping("/index.html")
    public String draft() {
        return "WEB-INF/jsp/index.jsp";
    }
}
