import styled from 'styled-components';
import { variables as v } from '@styles/variables';

export const StyledTodoItem = styled.label`
  @keyframes fade-out {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #dadaff;
    font-size: 0.9rem;
    cursor: pointer;
    word-break: break-word;
    border-radius: 5px;
    animation: fade-out 350ms ease-in;
    position: relative;

    &__checkbox {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
      z-index: -1;

      &:checked ~ .todo-item__title--grey {
        color: ${v.todoItemTitleGreySelected};
        font-weight: 600;
      }

      &:checked ~ .todo-item__title--blue {
        color: ${v.todoItemTitleBlueSelected};
        font-weight: 600;
      }

      &:checked ~ .todo-item__title--green {
        color: ${v.todoItemTitleGreenSelected};
        font-weight: 600;
      }
    }

    &__number {
      padding: 0rem 0.3rem;
      margin-right: 0.5rem;
      color: #ccc;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    &__title {
      font-size: 1rem;
      color: #999;
      white-space: nowrap;
      overflow: hidden;

      &--grey {
        color: ${v.todoItemTitleGrey};

        &:hover {
          color: ${v.todoItemTitleGreyHover};
        }
      }

      &--blue {
        color: ${v.todoItemTitleBlue};

        &:hover {
          color: ${v.todoItemTitleBlueHover};
        }
      }

      &--green {
        color: ${v.todoItemTitleGreen};

        &:hover {
          color: ${v.todoItemTitleGreenHover};
        }
      }
    }

    &__checkbox-wrap {
      display: flex;
      align-items: center;
      max-width: 80%;
    }

    &__remove-btn {
      padding: 0 0.5rem;
      font-size: 1.7rem;
      background-color: transparent;
      color: ${v.removeBtn};
      border: 0;
      transition: color 0.1s linear;
      cursor: pointer;
      outline: none;
      user-select: none;

      &:hover {
        color: ${v.removeBtnHover};
      }

      @media (max-width: ${v.tablet}) {
        font-size: 2.5rem;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      width: 10%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        ${v.bodyBg}
      );
    }

    @media (max-width: ${v.tablet}) {
      font-size: 1rem;
    }
  }
`;
