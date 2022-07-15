import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from "./usePreventBodyScroll";
import * as BsIcons from "react-icons/bs";

// NOTE: for hide scrollbar
import "./ScrollList.css";
import BusinessCard from "../BusinessCard/BusinessCard";

/* Temporary items for scroll menu */
const getId = (index) => `Business ${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

const ScrollList = () => {
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div className="example">
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            LeftArrow={LeftArrow} 
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {items.map(({ id }) => (
              <BusinessCard
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}

export default ScrollList;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

function Arrow({ children, disabled, onClick }) {
  return (
    <div className="arrow-container" disabled={disabled} onClick={onClick} style={{opacity: disabled ? "0" : "1", userSelect: "none",}}>
      {
				children === "Right" 
          ? <BsIcons.BsArrowRightCircle />
          : <BsIcons.BsArrowLeftCircle />
      }
    </div>
  );
}

function LeftArrow() {
    const {
      isFirstItemVisible,
      scrollPrev,
      visibleItemsWithoutSeparators,
      initComplete
    } = React.useContext(VisibilityContext);
  
    const [disabled, setDisabled] = React.useState(
      !initComplete || (initComplete && isFirstItemVisible)
    );

    React.useEffect(() => {
      // NOTE: detect if whole component visible
      if (visibleItemsWithoutSeparators.length) {
        setDisabled(isFirstItemVisible);
      }
    }, [isFirstItemVisible, visibleItemsWithoutSeparators]);
  
    return (
      <Arrow disabled={disabled} onClick={() => scrollPrev()}></Arrow>
    );
  }
  
function RightArrow() {
    const {
      isLastItemVisible,
      scrollNext,
      visibleItemsWithoutSeparators
    } = React.useContext(VisibilityContext);
  
    const [disabled, setDisabled] = React.useState(
      !visibleItemsWithoutSeparators.length && isLastItemVisible
    );
		
    React.useEffect(() => {
      if (visibleItemsWithoutSeparators.length) {
        setDisabled(isLastItemVisible);
      }
    }, [isLastItemVisible, visibleItemsWithoutSeparators]);
  
    return (
      <Arrow disabled={disabled} onClick={() => scrollNext()}></Arrow>
    );
  }

