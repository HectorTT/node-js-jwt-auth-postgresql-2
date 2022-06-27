import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default  function FormOrdenes() {

    const [age, setAge] = React.useState('');

  const handleChangeP = (event) => {
    setProducto(event.target.value);
  };

    const [formValuesP, setFormValuesP] = useState({
        nombre: {
          value: "",
          error: false,
          errorMessage: "Inserta un email valido",
        },
        cantidad: {
          value: "",
          error: false,
          errorMessage: "Inserta un password valido",
        },
        precio: {
            value: "",
            error: false,
            errorMessage: "Inserta un password valido",
          },
      });
    
      const [Producto, setProducto] = useState([]);
        const [open, setOpen] = useState(false);
        const [loading, setLoading] = useState(false);
        const [editing, setEditing] = useState(false);
        const params = useParams();
        const theme = createTheme();

        const [Product, setProdcts] = useState([]);
        const navegate = useNavigate();   
        
        const loadproduct = async () => {
            const res = await fetch('http://localhost:8080/product')
            const data = await res.json();
            console.log(data);
            const dataRows = [];
            data.forEach((item, i) => {
                //rows= [createData(item.nombre, item.precio, item.cantidad)];
                setProdcts(data);
                });
                Product.map((item, i) => {
                  console.log(item);
                  console.log(i);
                });
            /* setTasks(data); */
        }
       // setProdcts(rows)
        
        
        
        useEffect(() => {
            loadproduct();
        }, []); 

            /* Funcion que se ejecuta cuando se le da enviar */
    const handlerSubmitProductos = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (editing) {
            const res = await fetch(`http://localhost:8080/product/${params.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(Producto),
            });
            const data = await res.json();
            console.log(data);

        } else {
            /* Mandar datos a la API con fetch  mediante POST*/
            const res = await fetch('http://localhost:8080/product', {
                method: "POST",
                /* Sin esto mandaba los valores null */
                /* Parece que hacia falta decirle que lo que le enviamos es un JSON */
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: (JSON.stringify(Producto)),
            });
            const data = await res.json();
            console.log(data);
            setProducto(data);
            navegate("/login");
        }

        setLoading(false);
        navegate('/');
    }

    const handleChangeFormP = (e) => {
      if (e.target.value === "") {
        setFormValuesP({
          ...formValuesP,
          [e.target.name]: {
            value: e.target.value,
            error: true,
            errorMessage: "Inserta un " + e.target.name + " valido",
          },
        });
      } else if (e.target.name === "nombre") {
        if (/^[A-Za-z0-9]*$/.test(e.target.value)) {
          setFormValuesP({
            ...formValuesP,
            [e.target.name]: {
              value: e.target.value,
              error: false,
              errorMessage: "",
            },
          });
          setProducto({ ...Producto, [e.target.name]: e.target.value });
        } else {
          setFormValuesP({
            ...formValuesP,
            [e.target.name]: {
              value: e.target.value,
              error: true,
              errorMessage: "Inserta un " + e.target.name + " valido",
            },
          });
        }
      } else if (e.target.name === "cantidad") {
        if (
          /^[0-9\b]+$/.test(
            e.target.value
          )
        ) {
          setFormValuesP({
            ...formValuesP,
            [e.target.name]: {
              value: e.target.value,
              error: false,
              errorMessage: "",
            },
          });
          setProducto({ ...Producto, [e.target.name]: e.target.value });
  
        } else {
          setFormValuesP({
            ...formValuesP,
            [e.target.name]: {
              value: e.target.value,
              error: true,
              errorMessage:
                "Inserta un " +
                e.target.name +
                " valido: solo numeros",
            },
          });
        }
      }else if (e.target.name === "precio") {
        if (
          /^\d+(\.\d{1,2})?$/.test(
            e.target.value
          )
        ) {
          setFormValuesP({
            ...formValuesP,
            [e.target.name]: {
              value: e.target.value,
              error: false,
              errorMessage: "",
            },
          });
          setProducto({ ...Producto, [e.target.name]: e.target.value });
  
        } else {
          setFormValuesP({
            ...formValuesP,
            [e.target.name]: {
              value: e.target.value,
              error: true,
              errorMessage:
                "Inserta un " +
                e.target.name +
                " valido: solo numeros",
            },
          });
        }
      } else {
        setFormValuesP({
          ...formValuesP,
          [e.target.name]: {
            value: e.target.value,
            error: false,
            errorMessage: "",
          },
        });
        setProducto({ ...Producto, [e.target.name]: e.target.value });
      }
      console.log(Producto);
    };

return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#DFE7ED",
          }}
        >
          <Avatar sx={{ m: 4, bgcolor: "primary.main" }}>
            <InventoryOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Agregar Prducto
          </Typography>
          <Box
            component="form"
            onSubmit={handlerSubmitProductos}
            noValidate
            sx={{ m: 1 }}
          >
            <TextField
              required
              fullWidth
              id="nombre"
              label="Nombre"
              name="nombre"
              onChange={handleChangeFormP}
              autoComplete="Nombre"
            />
             <>
             <InputLabel id="demo-simple-select-label">Productos</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Product}
                label="Productos"
                onChange={handleChangeP}
            >
                {Product.map((item, i) => (
                    <MenuItem value={item.id} key={item.id}>{item.nombre}</MenuItem>
                    //console.log(item.nombre);
                ))}
            </Select>
            </>
            <TextField
              required
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              sx={{ mt: 1 }}
              fullWidth
              name="cantidad"
              label="Cantidad"
              onChange={handleChangeFormP}
              type="Cantidad"
              id="cantidad"
              autoComplete="new-Cantidad"
            />
            <TextField
              required
              fullWidth
              sx={{ mt: 1 }}
              id="precio"
              label="Precio"
              name="precio"
              onChange={handleChangeFormP}
              autoComplete="Precio"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Gurdar producto
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

  );
  
}

//FormOrdenes;