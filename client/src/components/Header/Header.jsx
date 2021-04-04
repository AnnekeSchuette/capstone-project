import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Switch, Route, useHistory } from 'react-router'
import Button from 'components/Button/Button'

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default function Header({ title, subtitle }) {
  const history = useHistory()
  return (
    <HeaderStyled>
      <Switch>
        <Route
          exact
          path={['/wine', '/wine/recommendation', '/dish-pairing', '/journal']}
        >
          <Button
            buttonText=""
            iconPos="left"
            onClick={() => history.push('.')}
          />
        </Route>
        <Route
          path={[
            '/wine/detail',
            '/wine/storage',
            '/dish-pairing/result',
            '/wine/recommendation/:wineType',
          ]}
        >
          <Button
            buttonText=""
            iconPos="left"
            onClick={() => history.goBack()}
          />
        </Route>
      </Switch>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  color: var(--color-ghost-white);
  position: relative;
  z-index: 1;

  button {
    position: absolute;
    left: var(--space-small);
    top: var(--space-medium);
    background: var(--color-midnight-blue);
  }
`
const Title = styled.div`
  font-family: 'Josefin', sans-serif;
  font-size: 1.7em;
  font-weight: 300;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: relative;
  letter-spacing: -1px;

  ::after {
    content: '';
    width: 3px;
    height: 3px;
    right: -5px;
    bottom: 7px;
    background: var(--color-popstar);
    position: absolute;
  }
`
const Subtitle = styled.h1`
  font-family: 'Josefin', sans-serif;
  font-size: 0.9em;
  margin: 0;
  font-weight: 300;
`
