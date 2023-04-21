using AutoMapper;
using CarRentalAPI.Models;

namespace CarRentalAPI.Configs
{
    public class MapperInitializer : Profile
    {
        public MapperInitializer()
        {
            CreateMap<ApiUser, UserDTO>().ReverseMap();
        }
    }
}
