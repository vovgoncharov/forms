"use strict";
const form = document.querySelector(".form-own");
const text = document.querySelector(".one");
const fName = document.querySelector(".first-name");
const lName = document.querySelector(".last-name");
const mob = document.querySelector(".mobile");
const pass = document.querySelector(".pass");
const inputs = [fName, lName, mob, pass];
const getForm = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        text.innerHTML = "";
        text.innerHTML = `${fName.value} ${lName.value}, ${mob.value},${pass.value}`;
    });
};
getForm();

const getFocus = () => {
    inputs.forEach((input) =>
        input.addEventListener("focus", (e) => {
            e.preventDefault();
            e.currentTarget.classList.add("anim-focus");
        }),
    );
};
const removeFocus = () => {
    inputs.forEach((input) =>
        input.addEventListener("blur", (e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("anim-focus");
            if (
                e.currentTarget.value.length < 5 &&
                e.currentTarget.value.length !== 0
            ) {
                e.currentTarget.classList.add("anim-blur");
            }else{
                e.currentTarget.classList.remove("anim-blur");
            }
            
        }),
    );
};
getFocus();
removeFocus();
