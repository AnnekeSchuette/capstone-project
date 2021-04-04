import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import DinnerNew from 'assets/icons/dinnerNew.svg'
import FoodAndWine from 'assets/icons/foodAndWine.svg'

import React from 'react'

export default function ReceptionPage() {
  return (
    <ReceptionPageWrapper>
      <h3>What are you looking for today?</h3>
      <CategoryCards>
        <NavLink to="/wine">
          <figure>
            <img src={FoodAndWine} alt="" />
          </figure>
          <h4>Wine Recommendation</h4>
        </NavLink>
        <NavLink to="/dish-pairing">
          <figure>
            <img src={DinnerNew} alt="" />
          </figure>
          <h4>Dish Inspiration</h4>
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
    text-align: center;
  }
  h4 {
    color: #fff;
  }
`
const CategoryCards = styled.div`
  display: grid;
  gap: var(--space-medium);

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
