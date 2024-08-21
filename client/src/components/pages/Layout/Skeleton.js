import styled from 'styled-components';

const SkeletonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background: #141414;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const SkeletonElement = styled.div`
    background: linear-gradient(90deg, #ff0000, #0000ff);
    border-radius: 4px;
    width: 100%;
    height: ${({ height }) => height || '20px'};
    margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
    background-size: 200% 100%;
    animation: pulse 1.5s infinite ease-in-out;

    @keyframes pulse {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 0%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
`;

const Skeleton = () => {
    return (
        <>
            <SkeletonWrapper>
                <SkeletonElement height="300px" />
                <SkeletonElement height="30px" marginBottom="10px" />
                <SkeletonElement height="20px" />
                <SkeletonElement height="20px" width="80%" />
                <SkeletonElement height="50px" width="150px" />
            </SkeletonWrapper>
            <SkeletonWrapper>
                <SkeletonElement height="300px" />
                <SkeletonElement height="30px" marginBottom="10px" />
                <SkeletonElement height="20px" />
                <SkeletonElement height="20px" width="80%" />
                <SkeletonElement height="50px" width="150px" />
            </SkeletonWrapper>
            <SkeletonWrapper>
                <SkeletonElement height="300px" />
                <SkeletonElement height="30px" marginBottom="10px" />
                <SkeletonElement height="20px" />
                <SkeletonElement height="20px" width="80%" />
                <SkeletonElement height="50px" width="150px" />
            </SkeletonWrapper>
            <SkeletonWrapper>
                <SkeletonElement height="300px" />
                <SkeletonElement height="30px" marginBottom="10px" />
                <SkeletonElement height="20px" />
                <SkeletonElement height="20px" width="80%" />
                <SkeletonElement height="50px" width="150px" />
            </SkeletonWrapper>
        </>
    );
};

export default Skeleton;
