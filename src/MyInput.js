import React, { useState } from "react";
import FontSize from "./FontSize";
import TextInput from "./TextInput";
import MyReset from "./MyReset";
import "./MyInput.css";

export default function MyInput() {
  return (
    <div>
      <table className="article">
        <tbody>
          <tr>
            <td align="center" width="10%">
              <FontSize />
            </td>
            <td align="left" width="70%">
              <TextInput />
            </td>
            <td align="left" width="10%">
              <MyReset />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
