import React, { useState } from 'react';
import styled from 'styled-components';
import { createMovie } from '../../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';

const AdminContainer = styled.div`
    background: linear-gradient(135deg, rgba(255, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormWrapper = styled.div`
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    width: 100%;
`;

const Admin = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [poster, setPoster] = useState(null);
    const [video, setVideo] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('releaseDate', releaseDate);

        if (poster) formData.append('poster', poster);
        if (video) formData.append('video', video);

        try {
            await createMovie(formData);
            setTitle('');
            setDescription('');
            setReleaseDate('');
            setPoster(null);
            setVideo(null);
            navigate('/movieList')
            alert('Movie added successfully!');
        } catch (error) {
            console.error('Error adding movie:', error);
            alert('Failed to add movie.');
        }
    };

    return (
        <AdminContainer>
            <FormWrapper>
                <h2 className="mb-4">Add New Movie</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter description"
                            required
                        ></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="releaseDate" className="form-label">Release Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="releaseDate"
                            value={releaseDate}
                            onChange={(e) => setReleaseDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="poster" className="form-label">Poster</label>
                        <input
                            type="file"
                            className="form-control"
                            id="poster"
                            onChange={(e) => setPoster(e.target.files[0])}
                            accept="image/*"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="video" className="form-label">Video</label>
                        <input
                            type="file"
                            className="form-control"
                            id="video"
                            onChange={(e) => setVideo(e.target.files[0])}
                            accept="video/*"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Add Movie</button>
                </form>
            </FormWrapper>
        </AdminContainer>
    );
};

export default Admin;
