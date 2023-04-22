using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CarRentalAPI.Migrations
{
    /// <inheritdoc />
    public partial class car2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d291b4bb-c3bc-43b6-82db-5de2c6efbddf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fc4c8795-5304-4886-b7bd-04753a30599c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "9379ee54-2c63-47b4-819b-0c54587244ef", "af677ff4-9ffb-4d25-b068-fc932a660c2b", "Administrator", "ADMINISTRATOR" },
                    { "bc3851a8-507c-4447-9a23-e28b08aa500a", "4e1cc58e-8494-4381-825d-25db52873917", "User", "USER" }
                });
        }

        /// <inheritdoc />
        
    }
}
