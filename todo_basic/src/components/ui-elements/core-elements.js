import { Fragment } from "react";

const emptyFuntion = (...para)=>{}

const LoopItms=({
    wrapperStyle="todo-list",
    items=[],
    renderIFEmpty=(<div>No result found</div>),
    renderItem=emptyFuntion,
})=>{
    return (
        <ui className={wrapperStyle}>
          {
            (items.length)?(
              <Fragment>
                {
                  (items).map((item,index)=>renderItem(item,index))
                }
              </Fragment>
            ):(
              <Fragment>
                {renderIFEmpty}
              </Fragment>
            )
          }
        </ui>
    )
}

export {
    LoopItms
}