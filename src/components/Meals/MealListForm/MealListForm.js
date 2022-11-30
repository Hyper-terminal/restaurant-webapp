import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./MealListForm.module.css";

const MealListForm = () => {
    return (
        <form className={classes.form}>
            <label htmlFor="meal-count">Amount</label>
            <input type="number" name="meal-count" />
            <Button name="+Add" type="submit" />
        </form>
    );
};

export default MealListForm;
