export default function Pagination({ postsperPage, totalPosts }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsperPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <button onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
    </div>
  );
}
