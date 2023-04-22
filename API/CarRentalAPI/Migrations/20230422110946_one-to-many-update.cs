using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CarRentalAPI.Migrations
{
    /// <inheritdoc />
    public partial class onetomanyupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_Taken_TakenId",
                table: "Cars");

            migrationBuilder.DropIndex(
                name: "IX_Cars_TakenId",
                table: "Cars");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9379ee54-2c63-47b4-819b-0c54587244ef");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bc3851a8-507c-4447-9a23-e28b08aa500a");

            migrationBuilder.DropColumn(
                name: "TakenId",
                table: "Cars");

            migrationBuilder.AddColumn<int>(
                name: "CarId",
                table: "Taken",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Taken",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Cars",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0f14a468-3def-4f4d-ae37-33c20415c394", "782575bf-6de6-4b09-b329-73c0d8a9a456", "User", "USER" },
                    { "69223e4d-2669-4432-9675-40ece033ccf4", "47946738-28e5-4421-ad1b-bbd4e5d7bdbd", "Administrator", "ADMINISTRATOR" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Taken_CarId",
                table: "Taken",
                column: "CarId");

            migrationBuilder.CreateIndex(
                name: "IX_Taken_UserId",
                table: "Taken",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Taken_AspNetUsers_UserId",
                table: "Taken",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Taken_Cars_CarId",
                table: "Taken",
                column: "CarId",
                principalTable: "Cars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Taken_AspNetUsers_UserId",
                table: "Taken");

            migrationBuilder.DropForeignKey(
                name: "FK_Taken_Cars_CarId",
                table: "Taken");

            migrationBuilder.DropIndex(
                name: "IX_Taken_CarId",
                table: "Taken");

            migrationBuilder.DropIndex(
                name: "IX_Taken_UserId",
                table: "Taken");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0f14a468-3def-4f4d-ae37-33c20415c394");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "69223e4d-2669-4432-9675-40ece033ccf4");

            migrationBuilder.DropColumn(
                name: "CarId",
                table: "Taken");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Taken");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Cars");

            migrationBuilder.AddColumn<int>(
                name: "TakenId",
                table: "Cars",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "9379ee54-2c63-47b4-819b-0c54587244ef", "af677ff4-9ffb-4d25-b068-fc932a660c2b", "Administrator", "ADMINISTRATOR" },
                    { "bc3851a8-507c-4447-9a23-e28b08aa500a", "4e1cc58e-8494-4381-825d-25db52873917", "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cars_TakenId",
                table: "Cars",
                column: "TakenId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_Taken_TakenId",
                table: "Cars",
                column: "TakenId",
                principalTable: "Taken",
                principalColumn: "Id");
        }
    }
}
