import React from "react";
import { Container, Carousel, Card, Button, CardGroup } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ia804504.us.archive.org/27/items/httpsneoxscans.net/Neox%20Scanlator%20%E2%80%93%20Leia%20na%20Neox%2C%20Mangas%2C%20Manhwas%2C%20Manhuas%21_files/banner-medio-SLL.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ia804504.us.archive.org/27/items/httpsneoxscans.net/Neox%20Scanlator%20%E2%80%93%20Leia%20na%20Neox%2C%20Mangas%2C%20Manhwas%2C%20Manhuas%21_files/banner-medio.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ia804504.us.archive.org/27/items/httpsneoxscans.net/Neox%20Scanlator%20%E2%80%93%20Leia%20na%20Neox%2C%20Mangas%2C%20Manhwas%2C%20Manhuas%21_files/banner-medio-second-lifee.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Container>
          <CardGroup>
            <Card border="dark" style={{ width: '350px' }}>
              <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/838115322182762576/1022046974112972800/Solo-Leveling.png" />
              <Card.Body>
              <Card.Title>Solo Leveling</Card.Title>
              <Card.Text>
                Meu nome é Sung Jin-Woo, um caçador de rank E. "O mais fraco do mundo". Sem ter nenhuma habilidade à disposição, eu mal consigo dinheiro nas dungeons de baixo nível… Ao menos até eu encontrar uma dungeon escondida com a maior dificuldade dentro do Rank D! No fim, enquanto aceitava minha morte, eu ganhei um novo poder…
              </Card.Text>
              <Button variant="secondary">Acessar Obra</Button>
              </Card.Body>
            </Card>  
            <Card border="dark" style={{ width: '350px' }}>
              <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/838115322182762576/1022046974326886420/Overgeared.png" />
              <Card.Body>
              <Card.Title>Overgeared</Card.Title>
              <Card.Text>
              Shin Youngwoo tinha uma vida miserável como servente de pedreiro. Ele até teve que trabalhar no jogo de realidade virtual, “Satisfy”! Mas, a sorte em breve apareceria em sua vida sem esperanças. Seu personagem, ‘Greed’, descobre uma missão na Caverna do Fim do Norte e nesse local ele encontra o ‘Raro Livro de Pagma’ que o torna um jogador lendário…
              </Card.Text>
              <Button variant="primary">Acessar Obra</Button>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '350px' }}>
              <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/838115322182762576/1022046973639000115/second-life-ranker.png" />
              <Card.Body>
              <Card.Title>Second Life Ranker</Card.Title>
              <Card.Text>
              Quando seu irmão volta para casa morto, Yeon-woo encontra no antigo relógio de seu irmão a resposta para seu desaparecimento repentino cinco anos atrás, agora sabendo a verdade, Yeon-woo parte em direção ao Obelisco, a torre do deus do sol, um lugar onde muitos universos e dimensões se intercalam. Nesse mundo, Yeon-woo subirá a torre em busca de sua vingança.
              </Card.Text>
              <Button variant="danger">Acessar Obra</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
    </div>
  );
};

export default App;