import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Tabs,
  Tab,
  Stack,
  Chip,
} from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
import LaptopIcon from "@mui/icons-material/Laptop";

const CourseCard = ({ course, openFile }) => (
  <Card
    elevation={2}
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: "16px",
      transition: "all 0.3s ease",
      border: "1px solid rgba(0,0,0,0.05)",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
      },
    }}
  >
    <Box
      sx={{
        background: "linear-gradient(135deg, #1893c6 0%, #1377a1 100%)",
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        src={require(`../assets/${course.icon}`)}
        alt={course.subject}
        height="64px"
        width="64px"
        style={{ filter: "brightness(0) invert(1)", marginBottom: "12px" }}
      />
      <Typography
        variant="h6"
        component="h3"
        fontWeight="bold"
        textAlign="center"
        color="white"
        sx={{ lineHeight: 1.2, mb: 0.5 }}
      >
        {course.subject}
      </Typography>
      <Chip
        label={course.year}
        size="small"
        sx={{
          backgroundColor: "rgba(255,255,255,0.2)",
          color: "white",
          fontWeight: "medium",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      />
    </Box>

    <CardContent sx={{ flexGrow: 1, p: 2 }}>
      {/* Presencial Section */}
      <Box sx={{ mb: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1} mb={1}>
          <SchoolIcon sx={{ fontSize: 18, color: "#fe860c" }} />
          <Typography variant="subtitle2" fontWeight="bold" color="text.primary">
            Presencial
          </Typography>
        </Stack>
        
        {course.presencial && course.presencial.length > 0 ? (
          course.presencial.map((option, idx) => (
            <Button
              key={idx}
              onClick={() => openFile(option.pdf)}
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                justifyContent: "space-between",
                textAlign: "left",
                mb: 0.5,
                textTransform: "none",
                borderColor: "rgba(0,0,0,0.12)",
                color: "text.primary",
                "&:hover": {
                  borderColor: "#1893c6",
                  backgroundColor: "rgba(24, 147, 198, 0.04)",
                },
              }}
              endIcon={<ArrowForwardIcon fontSize="small" />}
            >
              <Typography variant="caption" noWrap>
                {option.name}
              </Typography>
            </Button>
          ))
        ) : (
          <Typography
            variant="caption"
            display="block"
            sx={{
              p: 1,
              bgcolor: "rgba(0,0,0,0.03)",
              borderRadius: 1,
              color: "text.disabled",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Brevemente disponível
          </Typography>
        )}
      </Box>

      <Divider sx={{ my: 1.5, borderStyle: "dashed" }} />

      {/* Online Section */}
      <Box>
        <Stack direction="row" alignItems="center" spacing={1} mb={1}>
          <LaptopIcon sx={{ fontSize: 18, color: "#1893c6" }} />
          <Typography variant="subtitle2" fontWeight="bold" color="text.primary">
            Online
          </Typography>
        </Stack>

        {course.online && course.online.length > 0 ? (
          course.online.map((option, idx) => (
            <Button
              key={idx}
              onClick={() => openFile(option.pdf)}
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                justifyContent: "space-between",
                textAlign: "left",
                mb: 0.5,
                textTransform: "none",
                borderColor: "rgba(0,0,0,0.12)",
                color: "text.primary",
                "&:hover": {
                  borderColor: "#1893c6",
                  backgroundColor: "rgba(24, 147, 198, 0.04)",
                },
              }}
              endIcon={<ArrowForwardIcon fontSize="small" />}
            >
              <Typography variant="caption" noWrap>
                {option.name}
              </Typography>
            </Button>
          ))
        ) : (
          <Typography
            variant="caption"
            display="block"
            sx={{
              p: 1,
              bgcolor: "rgba(0,0,0,0.03)",
              borderRadius: 1,
              color: "text.disabled",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Brevemente disponível
          </Typography>
        )}
      </Box>
    </CardContent>
  </Card>
);

const Courses = ({ title, subtitle, courses }) => {
  const [activeTab, setActiveTab] = useState("Todos");
  const openFile = (pdf) => window.open(pdf, "_blank");

  const years = ["Todos", "9ºANO", "10ºANO", "11ºANO", "12ºANO"];

  const filteredCourses =
    activeTab === "Todos"
      ? courses
      : courses.filter((course) => course.year === activeTab);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box component="section" sx={{ py: 8, px: 2, backgroundColor: "#f8fafd" }}>
      <Container maxWidth="lg">
        <Box mb={5} textAlign="center">
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            sx={{
              position: "relative",
              display: "inline-block",
              pb: 2,
              "&::after": {
                content: "''",
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                backgroundColor: "#fe860c",
                borderRadius: "2px",
              },
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        {/* Filter Tabs */}
        <Box sx={{ mb: 4, display: "flex", justifyContent: "center", borderBottom: 1, borderColor: "divider" }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                px: 3,
              }
            }}
          >
            {years.map((year) => (
              <Tab key={year} label={year === "Todos" ? "Todos os Anos" : year} value={year} />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {filteredCourses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CourseCard course={course} openFile={openFile} />
            </Grid>
          ))}
          
          {filteredCourses.length === 0 && (
            <Grid item xs={12}>
              <Box textAlign="center" py={8}>
                <Typography variant="h6" color="text.secondary">
                  Não existem cursos disponíveis para este filtro.
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Courses;
