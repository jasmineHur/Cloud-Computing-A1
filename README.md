in Local
docker build --platform=linux/amd64 -t jasminehur238/demo . //for m1
docker images
docker logout
docker login
and push to AWS in docker

in AWS
sudo curl -fsSL https://get.docker.com/ | sh
sudo docker login
sudo docker pull jasminehur238/demo

sudo docker run -e AWS_ACCESS_KEY_ID="ASIA5DYSEEJ445OKPCMM" -e AWS_SECRET_ACCESS_KEY="bINGHhzLiIxLquqcFdwVAybG4UbNaeFMVKpJYHFi" -e AWS_SESSION_TOKEN="IQoJb3JpZ2luX2VjELP//////////wEaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAMjs0URV/tYLm7EpZgBWO0bdIzu6BfNRLcSzBGJVQadcAiA9HwG1iKx5GTs21R58ShgnR3oUftIUZL6dypVWsaqC/CqwAwhcEAIaDDkwMTQ0NDI4MDk1MyIMvBSv52mJJkXqoQ4YKo0DQ7MKGYDSHfqcAV+Sa3S99LJCr1QvOYhFmyCUm2U3l/SjWLe33QJYW217XqGeA7jcQ5qge4Xy3NVDNFPeIPUfhPhMuYQeusxjsMWYqa6cYCZ22+Xw1FqCeYwKy6ieJIOcUvDW0YBkVEQJb+WgJrs/LrYHoVawQIr57gmaBDvXvelZ8RuAh5CD4jTIidZ70v1XPNKWm3adEldJN4PrfHRCNCYQaUn2canRhiiPAKdL7M9/uKVTY3Ny+QQ2c7jaz7cJ+NyAJJfehiNb8QecySSHzWycKyxH33rO7PJkSpeyvkN2sYer22z3YCFFUoPIJc2/ODOpmi1DvFLt/mvM9aeL24+jGM0HDgnzUZlH8GsQNsgoWee3YCtdwrWXEwhtpwxkQAfpPIkaZs9RWFVhs18b5hX/kII+DC/t8RbJkT6m5VLmumDF0MG3CVHTBiX9UfNq/7ijDEep7KnymMtUsU3he2KfVHU+TLmxa54CUE0p1xsmoTzDQps+EuGLcP6c8guWCXsYLonSCV14mUsIaDDwuqaZBjqmAR6ErKAX6FTpP8+x5IDhW8tk6SB3FrxIND2S+jsU3AuYh+lwXZ6o7SrwFxFTaI4HWLGt9NdkBFJBpip2+yvSgI39QkfPUWLzguunYS188Yes1pkgsvwHJFEYsP81KMxbfUj1dSSbkXZPzybekGcTNsoD43TS3h6sxzJmy5zGZWreibCPO2XJsnYLHHmW0t7Ii+460a9hCAqX0wZmRURHVFsk8zVk1Wc=" -e SEATGEEK_API_KEY="Mjg1ODA0NTZ8MTY2MTA3MDAzNy4zMTE2OTcy" -e SEATGEEK_SECRET_API_KEY="ab4bb9ed60ccdf39c486760b29e4a00646a24007f6cc091e4d88399bcac39e38" -e OPENWEATHER_API_KEY="90a5fcdbfe63a6a832b34063adbbee98" -p 3000:3000 --platform linux/amd64 -t jasminehur238/demo
