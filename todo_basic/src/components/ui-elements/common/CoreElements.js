import { Fragment } from "react";
import { IsEmpty } from './UtilElements';

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
  console.log("LoopItms");
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

export {
    LoopItms,
    NoResultFound,
    emptyFuntion
}