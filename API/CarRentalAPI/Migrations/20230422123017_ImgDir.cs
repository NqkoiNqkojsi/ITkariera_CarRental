using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CarRentalAPI.Migrations
{
    /// <inheritdoc />
    public partial class ImgDir : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Taken_AspNetUsers_UserId",
                table: "Taken");

            migrationBuilder.DropForeignKey(
                name: "FK_Taken_Cars_CarId",
                table: "Taken");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Taken",
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

            migrationBuilder.RenameTable(
                name: "Taken",
                newName: "Queries");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Queries",
                newName: "UserID");

            migrationBuilder.RenameColumn(
                name: "CarId",
                table: "Queries",
                newName: "CarID");

            migrationBuilder.RenameIndex(
                name: "IX_Taken_CarId",
                table: "Queries",
                newName: "IX_Queries_CarID");

            migrationBuilder.AddColumn<string>(
                name: "ImgDir",
                table: "Cars",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Queries",
                table: "Queries",
                column: "Id");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "e9cdecd5-9f48-44fe-b04f-b57b74f14c6f", "9476d126-a092-4f52-aebe-46256da299c0", "User", "USER" },
                    { "fbc0c8d0-a3e1-4dd0-9fa0-c9ff5a100e29", "a55e3b91-7a64-4617-91d9-3bb319a5b534", "Administrator", "ADMINISTRATOR" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Queries_Cars_CarID",
                table: "Queries",
                column: "CarID",
                principalTable: "Cars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Queries_Cars_CarID",
                table: "Queries");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Queries",
                table: "Queries");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e9cdecd5-9f48-44fe-b04f-b57b74f14c6f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fbc0c8d0-a3e1-4dd0-9fa0-c9ff5a100e29");

            migrationBuilder.DropColumn(
                name: "ImgDir",
                table: "Cars");

            migrationBuilder.RenameTable(
                name: "Queries",
                newName: "Taken");

            migrationBuilder.RenameColumn(
                name: "UserID",
                table: "Taken",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "CarID",
                table: "Taken",
                newName: "CarId");

            migrationBuilder.RenameIndex(
                name: "IX_Queries_CarID",
                table: "Taken",
                newName: "IX_Taken_CarId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Taken",
                table: "Taken",
                column: "Id");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0f14a468-3def-4f4d-ae37-33c20415c394", "782575bf-6de6-4b09-b329-73c0d8a9a456", "User", "USER" },
                    { "69223e4d-2669-4432-9675-40ece033ccf4", "47946738-28e5-4421-ad1b-bbd4e5d7bdbd", "Administrator", "ADMINISTRATOR" }
                });

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
    }
}
