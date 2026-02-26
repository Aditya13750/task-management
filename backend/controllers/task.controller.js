import Task from '../models/task.model.js';

export const createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.user.id
  });

  res.status(201).json(task);
};

export const getTasks = async (req, res) => {
  const { page = 1, limit = 5, status, search } = req.query;

  const query = {
    user: req.user.id,
    ...(status && { status }),
    ...(search && {
      title: { $regex: search, $options: 'i' }
    })
  };

  const tasks = await Task.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );

  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id
  });

  res.json({ message: "Deleted" });
};