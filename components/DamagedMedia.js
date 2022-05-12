export default function DamagedMedia({ result }) {
  return (
    <div className="faq mb-5">
      <div className="item2 mt-3">
        <a href="#" title="click here" style={{ textTransform: "capitalize" }}>
          {result.name}
        </a>
        <div>
          <div className="subitem1">
            <p>{result.comment}</p>
            <div className="damaged-media">
              {result?.medias?.map((m, index) => {
                return (
                  <img
                    key={m.url + index}
                    src={m.url}
                    alt="..."
                    className="rounded"
                    width="200px"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
