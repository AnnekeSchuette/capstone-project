import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import DinnerNew from 'assets/icons/dinnerNew.svg'
import WineBottle from 'assets/icons/wineBottle.svg'

import React from 'react'

export default function ReceptionPage() {
  return (
    <ReceptionPageWrapper>
      <h3>What are you looking for?</h3>
      <CategoryCards>
        <NavLink to="/search/wine">
          <h4>I need a wine</h4>
          <figure>
            <img src={WineBottle} alt="" />
          </figure>
        </NavLink>
        <NavLink to="/search/dish">
          <h4>Dish match</h4>
          <figure>
            <img src={DinnerNew} alt="" />
          </figure>
        </NavLink>
      </CategoryCards>
    </ReceptionPageWrapper>
  )
}
const ReceptionPageWrapper = styled.section`
  display: grid;
  gap: var(--space-large);
  align-items: center;
  padding-top: var(--space-large);

  h3 {
    text-align: center;
  }
  h4 {
    color: #fff;
  }
`
const CategoryCards = styled.div`
  display: grid;
  gap: var(--space-medium);
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  a {
    color: var(--color-oxford-blue);
    text-decoration: none;
    text-align: center;
    justify-content: center;

    figure {
      border: 1px solid var(--color-ghost-white);
      border-radius: var(--space-xxsmall);
      margin: 0;
      display: grid;
      width: 100%;
      justify-items: center;
      padding: var(--space-medium);

      img {
        filter: invert(1);
        width: 50px;
        height: 50px;
      }
    }
  }
`
