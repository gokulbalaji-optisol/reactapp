import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

const TableRowComponent = ({
  data,
  cols,
  link,
  options = false,
  optionData = [],
  ...rest
}) => {
  return (
    <>
      {data.map((item, index) => (
        <TableRow>
          {cols.map((col, index) => {
            return (
              <>
                {col.type === "image" ? (
                  <TableCell>
                    <img
                      alt="image12"
                      height={34}
                      width={34}
                      src={
                        col.prefix
                          ? "http://localhost:3100/images/" + item[col.field]
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
                )}
              </>
            );
          })}
          {options && (
            <TableCell>
              {optionData.length > 0 &&
                optionData.map((i, index) => (
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
                ))}
            </TableCell>
          )}
        </TableRow>
      ))}
    </>
  );
};

export default TableRowComponent;
