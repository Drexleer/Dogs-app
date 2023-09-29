import React from 'react'
import { CardContainer, Header, Icon, IconSVG, Alert, Message, Actions, ReadButton, MarkAsReadButton, DivContainer } from './StyledNotification'
import { Link } from 'react-router-dom';

export default function Notification(props) {
    return (
        <DivContainer>
        <CardContainer>
          <Header>
            <Icon>
              <IconSVG fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  fillRule="evenodd"
                />
              </IconSVG>
            </Icon>
            <Alert>New message!</Alert>
          </Header>
          <Message>
          The dog has been successfully created, go to home to see it and search for it in the search bar.
          </Message>
          <Actions>
            <ReadButton><Link to={`/home`} style={{textDecoration: "none", color: "white"}}>Go to Home</Link></ReadButton>
            <MarkAsReadButton onClick={props.markAsRead}>Mark as Read</MarkAsReadButton>
          </Actions>
        </CardContainer>
        </DivContainer>
      );
    };
