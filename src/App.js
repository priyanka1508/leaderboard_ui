import React from 'react';
import { Container, Title, Divider, Stack, Paper } from '@mantine/core';
import Leaderboard from './components/Leaderboard';
import RankChecker from './components/RankChecker';

function App() {
  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/skulls.png")',
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
    padding: '40px 0',
  };

  return (
    <div style={backgroundStyle}>
      <Container size="sm">
          <Stack spacing="xl">
            <Title style={{ textAlign: 'center' }} order={1}>
              🎮 Gaming Leaderboard
            </Title>
            <Divider my="sm" />
            <Leaderboard />
            <Divider my="sm" />
            <RankChecker />
          </Stack>
      </Container>
    </div>
  );
}

export default App;
