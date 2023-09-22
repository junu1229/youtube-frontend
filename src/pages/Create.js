import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { getCategories } from '../api/Video';
import { useState, useEffect } from 'react';

const Header = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    padding: 20px 0;
`;

const Create = () => {
    const [categories, setCategories] = useState([]);

    const categoryAPI = async() => {
        const result = await getCategories;
        setCategories(result.data);
    };

    useEffect(() => {
        categoryAPI();
    }, [])


    return (
        <Container>
            <Header>동영상 업로드</Header>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>썸네일 이미지</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>동영상 업로드</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Select>
                    {categories.map((category) => (
                        <option value={category.categoryCode} key={category.categoryCode}>
                            {category.categoryName}
                        </option>
                    ))}
                </Form.Select>
                <Button variant="danger" style={{marginTop: "20px"}}>저장</Button>
            </Form>
        </Container>
    )

}
export default Create;