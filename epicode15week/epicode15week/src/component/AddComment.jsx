import { ModalContext } from "../context/ModalContextProvider";
import { Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";

function AddComment({ asin, loadComments }) {
  const {setAlert, setModal} = useContext(ModalContext)
  const initialFormState = {
    rate: "",
    comment: "",
    elementId: asin,
  };
  
  const [formValue, setFormValue] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const saveComment = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhkYjRhZTFiNWY4ODAwMTU0OTU5NTAiLCJpYXQiOjE3MjA1NjQzMTUsImV4cCI6MTcyMTc3MzkxNX0.AEDsZTbJX9nwRa8o0i-EB6cjimY8mxA7d7rr9uuzY7o",
          },
          method: "POST",
          body: JSON.stringify(formValue),
        }
      );
      if (response.ok) {        
        setAlert('Comment successfully added!');
        setModal(!false)
        setFormValue(initialFormState);
        loadComments();
      } else {
        setAlert('Unable to add the comment!');
        setModal(!false)
      }
    } catch (error) {
      setAlert('Generic Error! Try Later.');
      setModal(!false)
    }
  };

  return (
    <>
    <div className="d-flex justify-content-center">
      <Form>
        <Form.Group className="mb-3" controlId="rate">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Rate from 1 to 5"
            min="1"
            max="5"
            name="rate"
            value={formValue.rate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your comment"
            name="comment"
            value={formValue.comment}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            className="mb-2 text-center"
            variant="primary"
            onClick={saveComment}
          >
            Add Comment
          </Button>
        </div>
      </Form>
    </div>
    </>
  );
}

export default AddComment;
