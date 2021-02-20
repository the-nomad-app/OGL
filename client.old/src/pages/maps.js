import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Maps() {
  // Setting our component's initial state
  const [Maps, setMaps] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all maps and store them with setBooks
  useEffect(() => {
    loadMaps()
  }, [])

  // find API for trails / hikes
  function loadMaps() {
    API.getMaps()
      .then(res => 
        setMaps(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteMap(id) {
    API.deleteMap(id)
      .then(res => loadMaps())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the MAP DATA 
  // Then reload MAPS from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveMap({
        title: formObject.title,
        author: formObject.author,
        Overview: formObject.overview
      })
        .then(res => loadMaps())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Trails to find</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Trail
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Trails On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(map => (
                  <ListItem key={map._id}>
                    <Link to={"/maps/" + map._id}>
                      <strong>
                        {map.title} by {map.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteMap(map._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Maps;
