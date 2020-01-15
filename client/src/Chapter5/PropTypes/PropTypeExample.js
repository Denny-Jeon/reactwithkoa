// PropTypeExample.js
import React, { useState, useCallback } from "react";
import PropTypes, { oneOfType } from "prop-types";

const Bold = () => (
  <b>Bold ElementType </b>
);

class Message {
  send(message) {
    console.log(message);
  }
}

const TableCell = ({ type, children }) => (
  <tr>
    <td>
      {type}
    </td>
    <td>
      {children}
    </td>
  </tr>
);

TableCell.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TableCell.defaultProps = {
  children: null,
};

const PropTypeExampleSub = ({
  oArray, oBool, oNumber, oFunc, oObject, oString,
  oElement, OElementType, oMessage, oOneOf, oOneOfType,
  oArrayOf, oObjectOf, oShape, oExact, oAny,
}) => (
  <table>
    <thead>
      <TableCell type="type">
          value
      </TableCell>
    </thead>
    <tbody>
      <TableCell type="Array">
        {oArray.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </TableCell>
      <TableCell type="Bool">
        {oBool ? "true" : "false"}
      </TableCell>
      <TableCell type="Number">
        {oNumber}
      </TableCell>
      <TableCell type="Func">
        <button type="button" onClick={oFunc}>+</button>
      </TableCell>
      <TableCell type="Object">
        {JSON.stringify(oObject)}
      </TableCell>
      <TableCell type="String">
        {oString}
      </TableCell>
      <TableCell type="Element">
        {oElement}
      </TableCell>
      <TableCell type="ElementType">
        <OElementType>elementType</OElementType>
      </TableCell>
      <TableCell type="InstanceOf">
        {oMessage.send("instance of Message")}
        view  console.log: instance of Message
      </TableCell>
      <TableCell type="oneOf">
        {oOneOf}
      </TableCell>
      <TableCell type="oneOfType">
        {typeof oOneOfType}
      </TableCell>
      <TableCell type="arrayOf">
        {oArrayOf.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </TableCell>
      <TableCell type="objectOf">
        {JSON.stringify(oObjectOf)}
      </TableCell>
      <TableCell type="Shape">
        {`${oShape.num} ${oShape.str} ${oShape.other}`}
      </TableCell>
      <TableCell type="Exact">
        {`${oExact.num} ${oExact.str} ${oExact.other}`}
      </TableCell>
      <TableCell type="any">
        {typeof oAny}
      </TableCell>
    </tbody>
  </table>
);

PropTypeExampleSub.propTypes = {
  oArray: PropTypes.array,
  oBool: PropTypes.bool.isRequired,
  oNumber: PropTypes.number.isRequired,
  oFunc: PropTypes.func.isRequired,
  oObject: PropTypes.object,
  oString: PropTypes.string,
  oElement: PropTypes.element,
  OElementType: PropTypes.elementType.isRequired,
  oMessage: PropTypes.instanceOf(Message).isRequired,
  oOneOf: PropTypes.oneOf(["one", "two", "three"]),
  oOneOfType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message),
  ]).isRequired,
  oArrayOf: PropTypes.arrayOf(PropTypes.number),
  oObjectOf: PropTypes.objectOf(PropTypes.number),
  oShape: PropTypes.shape({
    num: PropTypes.number,
    str: PropTypes.string.isRequired,
  }),
  oExact: PropTypes.exact({
    num: PropTypes.number,
    str: PropTypes.string.isRequired,
  }),
  oAny: PropTypes.any,
};

PropTypeExampleSub.defaultProps = {
  oArray: [],
  oObject: {
    name: null,
    value: null,
  },
  oString: "",
  oElement: (<b>element</b>),
  oOneOf: "three",
};


const PropTypeExample = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(
    () => {
      setCount((prev) => prev + 1);
    },
    [],
  );
  return (
    <PropTypeExampleSub
      oArray={["1", "2"]}
      oBool
      oNumber={count}
      oFunc={handleIncrease}
      oObject={{
        name: "object",
        value: "value",
      }}
      oString="String"
      OElementType={Bold}
      oMessage={new Message()}
      oOneOfType="String Type"
      oArrayOf={[1, "2", 3]}
      oObjectOf={{
        a: 1,
        b: "2",
        c: 3,
      }}
      oShape={{
        num: 1,
        str: "string",
        other: "other",
      }}
      oExact={{
        num: 1,
        str: "string",
        other: "other",
      }}
      oAny={{
        num: 1,
        str: "string",
        other: "other",
      }}
    />
  );
};

export default PropTypeExample;
