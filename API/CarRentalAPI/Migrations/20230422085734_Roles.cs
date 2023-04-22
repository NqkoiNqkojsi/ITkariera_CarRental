using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CarRentalAPI.Migrations
{
    /// <inheritdoc />
    public partial class Roles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TakenId",
                table: "Cars",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Taken",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    From = table.Column<DateTime>(type: "TEXT", nullable: false),
                    To = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Taken", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "d291b4bb-c3bc-43b6-82db-5de2c6efbddf", "574e5a77-df64-4e9a-95e7-db867817d00b", "Administrator", "ADMINISTRATOR" },
                    { "fc4c8795-5304-4886-b7bd-04753a30599c", "304b02a0-151d-44df-855e-769aa8fd5a4d", "User", "USER" }
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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_Taken_TakenId",
                table: "Cars");

            migrationBuilder.DropTable(
                name: "Taken");

            migrationBuilder.DropIndex(
                name: "IX_Cars_TakenId",
                table: "Cars");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d291b4bb-c3bc-43b6-82db-5de2c6efbddf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fc4c8795-5304-4886-b7bd-04753a30599c");

            migrationBuilder.DropColumn(
                name: "TakenId",
                table: "Cars");
        }
    }
}
