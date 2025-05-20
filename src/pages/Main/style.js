// style.js
import styled from "styled-components";

export const S = {
  main: styled.div`
    overflow-x: hidden;
    width: 80vw;
    margin: 0 auto;
    padding: 2% 3%;
    display: flex;
    flex-direction: column;
    gap: 4%;
    box-sizing: border-box;
  `,

  top: styled.div`
    width: 100%;
    padding: 6% 3% 3% 3%;
    background: #f8f8f8;
    border-radius: 12px;
    position: relative;
    margin-top: 5%;
    /* drop shadow: x=0 y=4 blur=4 spread=0 color=rgba(0,0,0,0.25) */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,

  absoluteTitle: styled.h2`
    position: absolute;
    font-size: 1.5vw;
    font-weight: bold;
    margin: 0;
    z-index: 10;
  `,

  searchBox: styled.div`
    display: flex;
    align-items: center;
    gap: 2%;
    margin-bottom: 2%;
    margin-top: -2vw;
  `,

  input: styled.input`
    width: 100%;
    height: 60px;
    radius: 15px;
    padding-left: 2%;
    font-size: 1vw;
  `,

  searchIcon: styled.div`
    font-size: 1.5vw;
    cursor: pointer;
  `,

  conditionBox: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 4%;
  `,

  section1: styled.div`
    width: 60%;
  `,

  section2: styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
  `,

  sectionTitle: styled.h3`
    font-size: 1.2vw;
    margin-bottom: 2%;
  `,

  tagGroup: styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(80px, auto));
    row-gap: 8px;
    column-gap: 12px;
  `,

  radioLabel: styled.label`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8vw;
    color: #333;
    cursor: pointer;
    white-space: nowrap;
    margin: 4px 0;

    input[type="radio"] {
      accent-color: #4a90e2;
      width: 14px;
      height: 14px;
      margin: 0;
    }

    span {
      font-weight: 500;
    }
  `,

  regionGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, auto));
    gap: 8px 12px;
  `,

  regionRadioLabel: styled.label`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8vw;
    color: #333;
    cursor: pointer;
    white-space: nowrap;
    margin: 4px 0;

    input[type="radio"] {
      accent-color: #4a90e2;
      width: 14px;
      height: 14px;
      margin: 0;
    }

    span {
      font-weight: 500;
    }
  `,

  bottom: styled.div`
    margin-top: 7%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 4%;
    padding: 0 3%;
    box-sizing: border-box;
  `,

  bottomLeft: styled.div`
    width: 60%;
    position: relative;
  `,

  bottomRight: styled.div`
    width: 35%;
    position: relative;
  `,

  recent: styled.div`
    width: 100%;
    background-color: #f5f5f5;
    padding: 2%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* drop shadow: x=0 y=4 blur=4 spread=0 color=rgba(0,0,0,0.25) */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ul {
      width: 100%;
      padding: 0;
      margin: 0;
    }

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      border-bottom: 1px solid #ddd;
      font-size: 1vw;
      cursor: pointer;
    }

    .item:last-child {
      border-bottom: none;
    }
  `,

  frequent: styled.div`
    width: 100%;
    background-color: #f5f5f5;
    padding: 2%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* drop shadow: x=0 y=4 blur=4 spread=0 color=rgba(0,0,0,0.25) */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ul {
      width: 100%;
      padding: 0;
      margin: 0;
    }

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      border-bottom: 1px solid #ddd;
      font-size: 1vw;
      cursor: pointer;
    }

    .item:last-child {
      border-bottom: none;
    }
  `,
};
