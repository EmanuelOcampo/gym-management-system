import React from 'react'
import { Group, Burger, Container,Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { IconChevronDown } from '@tabler/icons-react';
import classes from './Header.module.css';
import reactLogo from '../../assets/react.svg'

const links = [
  { link: '/about', label: 'Features' },
  { link: '/about', label: 'About' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/support', label: 'Support' },
];


const Header: React.FC = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md" >
        <div className={classes.inner}>
          <Group>
            <img src={reactLogo} className="logo react" alt="React logo" />
            Gym name
          </Group>
          <Group gap={5} visibleFrom="sm">
            {items}
            <Button color='myColor' >Login</Button>
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  )
}

export default Header