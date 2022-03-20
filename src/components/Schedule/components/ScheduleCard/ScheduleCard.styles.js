import { css } from '@emotion/core';

const ScheduleCardStyles = css`
  width: 100%;
  border: 1px solid #444675;
  border-radius: 10px;
  padding: 30px;
  margin: 22px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border 500ms ease-in-out;
  cursor: pointer;
  &:hover {
    border: 1px solid #df42b1;
  }
  .cardWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 740px;
    color: #fff;
    .infoWrapper {
      display: flex;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
        display: block;
        border-radius: 50%;
        margin-right: 30px;
      }
    }
    .about {
      padding-left: 14px;
      p {
        i {
          color: #df42b1;
          margin-right: 10px;
        }
      }
    }
  }
  @media (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    max-width: 608px;
    .cardWrapper {
      max-width: 100%;
      flex-wrap: wrap;
      .infoWrapper {
        width: 100%;
        .info {
          h3 {
            font-size: 15px;
          }
          p {
            font-size: 13px;
          }
        }
      }
      .about {
        padding: 18px 14px;
        p {
          font-size: 15px;
        }
      }
    }
    .btn {
      width: 100%;
    }
  }

  @media (min-width: 971px) and (max-width: 1168px) {
    .cardWrapper {
      max-width: 80%;
      justify-content: flex-start;
      .infoWrapper {
        width: 100%;
        max-width: 55%;
        .info {
          h3 {
            font-size: 15px;
          }
          p {
            font-size: 13px;
          }
        }
      }
      .about {
        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export default ScheduleCardStyles;
