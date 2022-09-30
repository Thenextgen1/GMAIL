import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Inbox,
  AllMail,
  Chats,
  Drafts,
  Important,
  Lists,
  Scheduled,
  Sent,
  Snoozed,
  Spam,
  Starred,
  Trash,
} from "./pages";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Inbox />}
          />
          <Route
            path="/allMail"
            element={<AllMail />}
          />
          <Route
            path="/chats"
            element={<Chats />}
          />
          <Route
            path="/drafts"
            element={<Drafts />}
          />
          <Route
            path="/important"
            element={<Important />}
          />
          <Route
            path="/lists"
            element={<Lists />}
          />
          <Route
            path="/scheduled"
            element={<Scheduled />}
          />
          <Route
            path="/sent"
            element={<Sent />}
          />
          <Route
            path="/spam"
            element={<Spam />}
          />
          <Route
            path="/snoozed"
            element={<Snoozed />}
          />
          <Route
            path="/starred"
            element={<Starred />}
          />
          <Route
            path="/trash"
            element={<Trash />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
