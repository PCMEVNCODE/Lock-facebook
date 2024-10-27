// ==UserScript==
// @name         Facebook Password Protection
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  No one
// @author       Bạn
// @match        *://*.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let correctPassword = "(Your password)"; // Create password


    let overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlay.style.zIndex = "9999";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center"; 
    overlay.style.justifyContent = "center"; 
    overlay.style.color = "white";
    overlay.innerHTML = `
        <div style="text-align: center;">
            <h1 style="font-size: 48px; font-weight: bold; color: red;">NGHIÊM CẤM TRUY CẬP TRÁI PHÉP!</h1>
            <h1 style="font-size: 20px; color: white;">Facebook phát hiện ai đó truy cập trái phép tài khoản của bạn. Để đảm bảo an toàn cho tài khoản của bạn, vui lòng nhập mật khẩu để tiếp tục truy cập Facebook.</h1>
            <label for="password" style="font-size: 24px; font-weight: bold; color: white;">Nhập mật khẩu để tiếp tục truy cập Facebook:</label><br><br>
            <input type="password" id="password" style="padding: 15px; font-size: 20px; z-index: 10000;" /><br><br>
            <button id="submitPassword" style="padding: 15px 30px; font-size: 20px; cursor: pointer;">Xác nhận</button>
            <p id="errorMessage" style="color: red; display: none; font-size: 24px; font-weight: bold;">Mật khẩu sai! Vui lòng thử lại.</p>
        </div>
    `;
    document.body.appendChild(overlay);

    
    document.body.style.pointerEvents = "none"; 
    Array.from(document.body.children).forEach((child) => {
        if (child !== overlay) {
            child.style.filter = "blur(5px)"; 
        }
    });

    
    let passwordInput = document.getElementById("password");
    let submitButton = document.getElementById("submitPassword");
    let errorMessage = document.getElementById("errorMessage");

    
    passwordInput.style.pointerEvents = "auto"; 
    submitButton.style.pointerEvents = "auto"; 

    
    submitButton.addEventListener("click", function() {
        let userPassword = passwordInput.value;
        if (userPassword === correctPassword) {
            overlay.style.display = "none"; 

           
            document.body.style.pointerEvents = "auto"; 
            Array.from(document.body.children).forEach((child) => {
                child.style.filter = "none"; 
            });
        } else {
            errorMessage.style.display = "block";
        }
    });

})();
