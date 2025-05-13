import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Courses = ({ title, subtitle, courses }) => {
  const openFile = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
    <Box component="section" sx={{ py: 8, px: 2 }}>
      <Container maxWidth="lg">
        <Box mb={6} textAlign="center">
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

        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1893c6",
                    py: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <img
                    src={require(`../assets/${course.icon}`)}
                    alt={course.subject}
                    height="80px"
                    width="80px"
                    style={{
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                  <Chip
                    label={course.mode}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      backgroundColor: "#ff9800", // Muted orange color
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "0.7rem",
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    fontWeight="medium"
                    textAlign="center"
                  >
                    {course.subject}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    textAlign="center"
                    gutterBottom
                  >
                    {course.year}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ pt: 1 }}>
                    {course.courseOptions && course.courseOptions.length > 0 ? (
                      course.courseOptions.map((option, optionIndex) => (
                        <Button
                          key={optionIndex}
                          onClick={() => openFile(option.pdf)}
                          fullWidth
                          sx={{
                            justifyContent: "space-between",
                            textAlign: "left",
                            py: 1,
                            px: 2,
                            mb: 1, // Add margin bottom for spacing between buttons
                            borderRadius: "8px",
                            backgroundColor: "rgba(24, 147, 198, 0.08)",
                            "&:hover": {
                              backgroundColor: "rgba(24, 147, 198, 0.15)",
                            },
                            // Remove margin bottom for the last button
                            ...(optionIndex ===
                              course.courseOptions.length - 1 && {
                              mb: 0,
                            }),
                          }}
                        >
                          <Typography variant="body2" fontWeight="medium">
                            {option.name}
                          </Typography>
                          <ArrowForwardIcon fontSize="small" />
                        </Button>
                      ))
                    ) : (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(0, 0, 0, 0.03)",
                          borderRadius: "8px",
                          py: 1.5,
                          px: 2,
                        }}
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: 16,
                            color: "text.secondary",
                            mr: 1,
                          }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          Cursos disponíveis em breve
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Courses;
