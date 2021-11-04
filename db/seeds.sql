INSERT INTO user (username, first_name, last_name, email, password)
VALUES
('leebu', 'Lee', 'Burridge', 'leebu@mail.com', 'leebu123'),
('yokoo', 'Yoko', 'O', 'yokoo@mail.com', 'yokoo123'),
('damianl', 'Damian', 'Lazarus', 'damianl@mail.com', 'damianl123');


INSERT INTO event (name, description, date, location, creator_id)
VALUES
('Pick up basketball', '5-on-5 20 minute games', '2021-11-11 09:00:00', 'YMCA', 1),
('Sewing circle', 'Come sew, quilt and craft', '2021-12-11 16:00:00', 'Senior Center', 2),
('Double Dipsea', '20 mile out and back run along the Dipsea trail', '2008-11-11 09:00:00', 'Dipsea Trailhead', 3);

INSERT INTO rsvp (user_id, event_id)
VALUES
(1, 2),
(1, 3),
(2, 1),
(3, 1);