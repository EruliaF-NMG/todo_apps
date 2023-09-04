import { Fragment } from "react";
import { IsEmpty } from './UtilElements';
import { Spin } from 'antd';

const emptyFuntion = (...para)=>{}

const NoResultFound=()=>{
  return (
    <div>No result found</div>
  );
}

const LoopItms=({
    wrapperStyle="todo-list",
    items=[],
    renderIFEmpty=(<NoResultFound/>),
    renderItem=emptyFuntion,
})=>{
    return (
        <ui className={wrapperStyle}>
          <IsEmpty
            value={items}
            renderIFEmpty={renderIFEmpty}
          >
              <Fragment>
                {
                  (items).map((item,index)=>renderItem(item,index))
                }
              </Fragment>
          </IsEmpty>
        </ui>
    )
}

const SpinWrapper = ({
  size="large"
})=>{
  return (
    <Spin 
      size={size}
    />
  )
}

const FullPageLoader=()=>{
  return (
    <Fragment>
      {
        ( false )? (
            <div className="page-loader">
              <SpinWrapper/>
            </div>
          ): ( null )
      }
    </Fragment>
  );
}

export {
    LoopItms,
    NoResultFound,
    emptyFuntion,
    FullPageLoader
}