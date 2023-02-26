export default function HomePage() {
    function Header({ title }) {
        return <h1>{createTitle(title)}</h1>;
      }

    return (
        function createTitle(title) {
            if (title) {
              return title;
            } else {
              return 'Default title';
            }
          }
    );
}