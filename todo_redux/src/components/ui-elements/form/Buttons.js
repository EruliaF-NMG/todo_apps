import { Fragment, useState,useContext } from 'react'
import { Button } from 'antd';
import { emptyFuntion } from '../common/CoreElements';
import { ButtonTypes,ButtonSize } from '../../../configs/ui-elements-configs';

const BasicButton = ({
    onBtnClick=emptyFuntion,
    btnType=ButtonTypes.primary,
    disabled=false,
    classNames="",
    size=ButtonSize.middle,
    lable="",
    isDanger=false,
}) =>{
  return (
        <Button 
            onClick={(event)=>onBtnClick(event)} 
            type={btnType}
            disabled={disabled}
            classNames={classNames}
            size={size}
            danger={isDanger}
        >{lable}</Button>
  );

}

export {
    BasicButton
}