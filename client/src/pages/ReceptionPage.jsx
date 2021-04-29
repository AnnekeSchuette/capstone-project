import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import DinnerNew from 'assets/icons/dinnerNew.svg'
import FoodAndWine from 'assets/icons/foodAndWine.svg'

import React from 'react'

export default function ReceptionPage() {
  return (
    <ReceptionPageWrapper>
      <h2>What are you looking for today?</h2>
      <CategoryCards>
        <NavLink to="/wine">
          <figure>
            <img src={FoodAndWine} alt="" />
          </figure>
          <h3>Wine Recommendation</h3>
        </NavLink>
        <NavLink to="/dish-pairing">
          <figure>
            <img src={DinnerNew} alt="" />
          </figure>
          <h3>Dish Inspiration</h3>
        </NavLink>
      </CategoryCards>
    </ReceptionPageWrapper>
  )
}
const ReceptionPageWrapper = styled.section`
  display: grid;
  gap: var(--space-large);
  align-items: center;

  h3 {
    font-size: 1em;
    color: var(--color-ghost-white);
  }
`
const CategoryCards = styled.div`
  display: grid;
  gap: var(--space-medium);

  @media screen and (min-width: 667px) {
    grid-template-columns: 1fr 1fr;
  }

  a {
    text-decoration: none;
    border: 1px solid var(--color-ghost-white);
    border-radius: var(--space-xxsmall);
    display: grid;
    padding: var(--space-medium);
    place-items: center;

    figure {
      margin: 0;

      img {
        filter: invert(1);
        width: 45px;
        height: 45px;
      }
    }
  }
`
