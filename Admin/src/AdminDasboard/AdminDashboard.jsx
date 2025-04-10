// AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get("/api/products");
    setProducts(res.data);
  };

  const handleAdd = async () => {
    await axios.post("/api/products", form);
    setForm({ title: "", description: "" });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`);
    fetchProducts();
  };

  const handleUpdate = async () => {
    await axios.put(`/api/products/${editingId}`, form);
    setForm({ title: "", description: "" });
    setEditingId(null);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box sx={{ maxWidth: "700px", mx: "auto", p: 3 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom textAlign="center">
        🛠️ Products Admin
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardHeader
          title={editingId ? "Edit Product" : "Add Product"}
          titleTypographyProps={{ fontSize: 20, fontWeight: 500 }}
        />
        <CardContent>
          <TextField
            fullWidth
            label="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            margin="normal"
          />
        </CardContent>
        <CardActions sx={{ px: 2, pb: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color={editingId ? "warning" : "primary"}
            onClick={editingId ? handleUpdate : handleAdd}
          >
            {editingId ? "Update Product" : "Add Product"}
          </Button>
        </CardActions>
      </Card>

      <Grid container spacing={2}>
        {products.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Card>
              <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
                <Box display="flex" gap={1}>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setForm({ title: item.title, description: item.description });
                      setEditingId(item.id);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
