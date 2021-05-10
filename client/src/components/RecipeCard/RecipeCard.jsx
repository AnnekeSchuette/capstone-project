import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import BadgeList from 'components/BadgeList/BadgeList'

export default function RecipeCard({
  catTags = ['italian, pasta, vegetarian'],
  ...props
}) {
  return (
    <RecipeCardWrapper {...props}>
      <h3>Headline</h3>
      <h4>Subline</h4>
      <BadgeList data={catTags} />
      {props.children}
    </RecipeCardWrapper>
  )
}

const RecipeCardWrapper = styled.article`
  display: grid;
  width: 100%;
  gap: var(--space-small);
  border: none;
  border-radius: var(--space-xxsmall);
  background: var(--color-ghost-white);
  color: var(--color-midnight-blue);
  padding: var(--space-small);
  box-shadow: 0px 2px 1px #00000070;
  position: relative;
  place-content: start;

  h3 {
    font-size: 0.9em;
    place-self: start;
  }
`
