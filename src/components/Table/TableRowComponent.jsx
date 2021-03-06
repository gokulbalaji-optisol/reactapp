import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import CartButton from "pages/Cart/CartButton";

const TableRowComponent = ({
  data,
  cols,
  link,
  options = false,
  optionData = [],
  ...rest
}) => {
  function createField(col, item) {
    switch (col.type) {
      case "image":
        return (
          <TableCell>
            <img
              alt="image12"
              height={34}
              width={34}
              src={
                col.prefix
                  ? "http://localhost:3100/images/" +
                    col.field.split(".").reduce((o, i) => o[i], item)
                  : item[col.field]
              }
            />
          </TableCell>
        );

      case "boolean":
        return (
          <>
            {col.field && (
              <TableCell>
                {col.field.split(".").reduce((o, i) => o[i], item)
                  ? "true"
                  : "false"}
              </TableCell>
            )}
          </>
        );
        break;
      case "text":
        return (
          <>
            {col.field && (
              <TableCell>
                {col.field.split(".").reduce((o, i) => o[i], item)}
              </TableCell>
            )}
          </>
        );
      default:
        console.log("default");
    }
  }

  return (
    <>
      {data.map((item, index) => (
        <TableRow>
          {cols.map((col, index) => {
            return (
              <>
                {createField(col, item)}
                {/* {col.type === "image" ? (
                  <TableCell>
                    <img
                      alt="image12"
                      height={34}
                      width={34}
                      src={
                        col.prefix
                          ? "http://localhost:3100/images/" +
                            col.field.split(".").reduce((o, i) => o[i], item)
                          : item[col.field]
                      }
                    />
                  </TableCell>
                ) : (
                  //item[col.field] ||
                  <>
                    {col.field && (
                      <TableCell>
                        {col.field.split(".").reduce((o, i) => o[i], item)}
                      </TableCell>
                    )}
                  </>
                )} */}
              </>
            );
          })}
          {options && (
            <TableCell>
              {optionData.length > 0 &&
                optionData.map((i, index) => {
                  return i.mode ? (
                    i.component(item.id)
                  ) : (
                    <Button
                      key={i + index}
                      size="large"
                      component={Link}
                      to={i.link + item.id}
                      color={i.color}
                      variant="contained"
                    >
                      <i className={i.buttonCSS}></i>
                    </Button>
                  );
                  // );
                })}
            </TableCell>
          )}
        </TableRow>
      ))}
    </>
  );
};

export default TableRowComponent;
